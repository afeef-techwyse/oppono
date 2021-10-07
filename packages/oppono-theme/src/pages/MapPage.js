import React from "react";
import {connect, styled} from "frontity";
import Footer from "../components/Footer";
import FormStep from "../components/form-components/FormStep";
import Header from "../components/Header";
import mapInfo from "../assets/images/map-info-bg.png";
import Input from "../components/form-components/Input";
import Button from "../components/form-components/Button";
import Container from "../components/reusable/Container";
import Link from "../components/reusable/Link";
import {size} from "../functions/size";
import Select from "../components/form-components/Select";
import useAddress from '../contexts/AddressProvider'

import cities from "../assets/cities assets/cities.json";
import opponoApi from "../opponoApi";
import debounce from "../functions/debounce";
import classnames from "classnames";

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

const sortedCities = cities.sort((a, b) => (a.name > b.name ? 1 : -1));
const MapPage = ({className, actions, state, libraries}) => {
  const generateMap = ({windowSize, name, coordinates, enc, zoom}) => {
    let link = `https://maps.googleapis.com/maps/api/staticmap?map_id=3a82b8043ec69e1&zoom=${
        zoom || 7
    }&key=AIzaSyD9Q58YYqhsWqlGn1p-GzPWv3iyCZ2iTss&size=${
        windowSize?.width || 1920
    }x${windowSize?.height || 1080}`;
    link += name
        ? `&center=canada+ontario+${name.replaceAll(" ", "+")}`
        : "&center=canada+toronto";
    link += coordinates
        ? `&path=color:0x0E9564FF|weight:2|fillcolor:0x26D69634|${coordinates
            .map((a) => a[0].toFixed?.(3) + "," + a[1].toFixed?.(3))
            .join("|")}`
        : "";
    link += enc
        ? `&path=color:0x0E9564FF|weight:2|fillcolor:0x26D69634|enc:${enc}`
        : "";
    return link;
  };
  const mapRef = React.useRef(null);
  const mapAPIRef = React.useRef(null);
  const polygonAPIRef = React.useRef(null);
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] = React.useState(
      ""
  );

  const { address, handleAddressChange } = useAddress();

  // const geocoderAPIRef = React.useRef(null);

  const initMap = () => {
    mapAPIRef.current = new window.google.maps.Map(mapRef.current, {
      center: {lat: 43.653226, lng: -79.3831843},
      zoom: 9,
      disableDefaultUI: true,
      draggable: true,
      mapId: "3a82b8043ec69e1",
    });
    polygonAPIRef.current = new window.google.maps.Polygon({
      // paths: triangleCoords,
      strokeColor: "#0E9564",
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: "#26D696",
      fillOpacity: 0.2,
      map: mapAPIRef.current,
    });
    polygonAPIRef.current.getBounds = function () {
      let bounds = new window.google.maps.LatLngBounds();
      let paths = polygonAPIRef.current.getPaths();
      let path;
      for (let i = 0; i < paths.getLength(); i++) {
        path = paths.getAt(i);
        for (let ii = 0; ii < path.getLength(); ii++) {
          bounds.extend(path.getAt(ii));
        }
      }
      return bounds;
    };

    // geocoderAPIRef.current = new window.google.maps.Geocoder();
    // geocoderAPIRef.current.geocode({address: 'canada+toronto'}, (results, status) => {
    //   if (status === window.google.maps.GeocoderStatus.OK) {
    //   }
    // });
  };

  React.useEffect(() => {
    actions.source.fetch("appraisers-map-lookup");
    if (!window.google) {
      const scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src = `https://maps.google.com/maps/api/js?key=AIzaSyD9Q58YYqhsWqlGn1p-GzPWv3iyCZ2iTss&map_ids=3a82b8043ec69e1`;
      document.body.appendChild(scriptElement);
      scriptElement.addEventListener("load", initMap);
    } else {
      initMap();
    }
  }, []);

  // const windowSize = useWindowSize();
  const [appraiser, setAppraiser] = React.useState([{}]);
  const postal_city = React.useRef({postalCode: "", city: ""});
  const appraisersLookup = state.source.get("appraisers-map-lookup");
  const postalCodeGetAppraiser = debounce((postalCode) => {
    if (postalCode.length < 3) {
      setAppraiser([{}]);
      setPostalCodeErrorMessage(true);
      return;
    }
    const data = new FormData();
    data.append("postal_code", postalCode.trim().slice(0, 3));
    opponoApi.post("/appraiser-lookup", data).then((response) => {
      if (response.data.length > 2) {
        setAppraiser([{}]);
        setPostalCodeErrorMessage(true);
      } else if (response.data.length == 0) {
        setAppraiser([{}]);
        setPostalCodeErrorMessage(true);
      } else {
        setAppraiser(response.data);
        setPostalCodeErrorMessage(false);
        const {coordinates} = cities.filter(
            (city) => city.name === response.data[0]?.fields.city
        )[0];
        polygonAPIRef.current.setPaths(coordinates);
        mapAPIRef.current.fitBounds(polygonAPIRef.current.getBounds());
      }
    });
  }, 1000);
  React.useEffect(() => {
    actions.theme.setActiveTheme("gray-theme");
  }, []);

  const Html2React = libraries.html2react.Component;

  return (
      <div className={classnames(className)}>
        <div className="map" ref={mapRef}/>
        <Header hasSubMenu={false}/>
        <Container className={classnames({flex: !appraiser[0]?.fields})}>
          <div className="map-wrapper">
            <div className="col-left">
              <div className="text-wrapper">
                <h1 className={"headline-1"}>We're proud to serve Ontario</h1>
                {/*<h2 className={'headline-2 dark'}>Looking within a specific city or region?</h2>*/}
              </div>
              <div className="inputs-group">
                <Select
                    onChange={({name, coordinates, zoom, center}) => {
                      postal_city.current.city = name;
                      // setMap(generateMap({windowSize, name, enc, zoom}));
                      setAppraiser(appraisersLookup.data[name] || [{fields: {city:name}}]);
                      polygonAPIRef.current.setPaths(coordinates);
                      mapAPIRef.current.fitBounds(
                          polygonAPIRef.current.getBounds()
                      );
                      // mapAPIRef.current?.setCenter(center);
                      // mapAPIRef.current?.setZoom(zoom);
                      // geocoderAPIRef.current.geocode({address: `canada+ontario+${name.replaceAll(' ', '+')}`}, (results, status) => {
                      //   if (status === google.maps.GeocoderStatus.OK) {
                      //     copyToClipboard(JSON.stringify({center:results[0].geometry.location}).slice(1,-1)+',')
                      // //     mapAPIRef.current?.setCenter(results[0].geometry.location);
                      // //     mapAPIRef.current?.setZoom(zoom);
                      // //     polygonAPIRef.current.setPaths(coordinates)
                      //   }
                      // });
                    }}
                    noOptionsMessage={() => "No City Found"}
                    options={sortedCities}
                    name={"city"}
                    label={"Select a city"}
                    value={cities.filter(
                        (city) => city.name === appraiser[0]?.fields?.city
                    )}
                />
                <p>OR</p>
                <Input
                    type={"text"}
                    name={"postal_code"}
                    onChange={(e) => {
                      postal_city.current.postalCode = e.target.value;
                      postalCodeGetAppraiser(e.target.value);
                    }}
                    placeholder={"L5H 3S4"}
                    label={"Type in your postal code"}
                />
              </div>
              {postalCodeErrorMessage ? (
                  <p className={"error-message"}>
                    No appraisers found for this postal code<br/>
                    <Link href={'/get-in-touch'}>Please contact us</Link>
                  </p>
              ) : null}
              {appraiser[0] ? (
                  <div className="btn-group">
                    {/*<Button label={'Search'}/>*/}
                    <Button
                        disabled={!appraiser[0]}
                        label={"Find Appraisers in the Area"}
                        onClick={() => {
                          actions.theme.setAppraiser({
                            ...appraiser[0],
                            ...postal_city.current,
                          });

                          handleAddressChange(postal_city.current)
                          actions.router.set( "/dashboard/e");
                        }}
                    />
                  </div>
              ) : null}
            </div>
            <div className="col-right">
              {appraiser[0]?.fields
                  ? appraiser.map((a) =>
                      a.fields ? (
                          <div key={a.ID} className="appraisal-block">
                            <h3>{a.fields.bdm?.name}</h3>
                            <p className="text">{a.fields.bdm?.phone}</p>
                            <p className="text">{a.fields.bdm?.email}</p>
                            <hr/>
                            <p className="text">{a.fields.city}</p>
                            <p className="ltv">{a.fields.ltv}% LTV</p>
                            <p className="text bold">Preferred appraisal companies</p>
                            <p className="text">
                              {[...a.fields.preferred_appraisal_company]
                                  ?.map?.((c) => c.post_title)
                                  .join(", ")}
                            </p>
                          </div>
                      ) : null
                  )
                  : null}
              {appraiser[0]?.fields ? (
                  <Button
                      label={"Find Appraisers in the Area"}
                      onClick={() => {
                        actions.theme.setAppraiser({
                          ...appraiser[0],
                          ...postal_city.current,
                        });
                        actions.router.set("/dashboard/e");
                      }}
                  />
              ) : null}
            </div>
            <div className="cf"></div>
          </div>
        </Container>
        <Footer/>
      </div>
  );
};

export default styled(connect(MapPage))`
  height: calc(var(--vh, 1vh) * 100);
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  ${Header} {
    background: none !important;
  }

  .container {
    margin-top: 50px;
  }

  header .container,
  footer .container {
    margin-top: 0px;
  }

  .map-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 6;
    @media (max-width: 991.98px) {
      width: 100%;
      flex-direction: column;
      height: 90%;
    }
    @media (min-width: 1400px) {
      transform: scale(0.8);
    }
    @media (min-width: 1800px) {
      transform: scale(0.68);
      margin-top: -1rem;
    }

    @media (max-width: 575.98px) {
      margin: auto;
      position: fixed;
      top: 15%;
      left: 0;
      overflow: scroll;
      padding-bottom: 8rem;
      width: 100%;
      z-index: 100;
    }

    .col-left {
      display: flex;
      flex-direction: column;
      max-width: ${size(660)};
      background: #161a20b8;
      padding: ${size(40)};

      @media (max-width: 991.98px) {
        margin-bottom: ${size(50)};
      }

      @media (max-width: 575.98px) {
        padding: 2rem;
				background: #161a20;
      }

      .inputs-group {
        display: flex;
        align-items: center;

        .form-group {
          margin: 0;
          flex-grow: 1;
          flex-basis: 50%;
          width: 100%;
        }

        p {
          color: #bfb6b4;
          font-size: ${size(16)};
          font-weight: 400;
          margin: 0 ${size(38)};
          @media (max-width: 575.98px) {
            margin: ${size(20)} 0;
          }
        }

        margin-top: ${size(15)};
        @media (max-width: 991.98px) {
          margin-top: ${size(63)};
        }
        @media (max-width: 575.98px) {
          margin-top: ${size(2.5)};
          flex-direction: column;
          align-items: flex-start;
        }
      }

      .headline-1 {
        color: #bfb6b4;
        font-size: ${size(40)};
        font-weight: 300;
        line-height: ${size(48)};
        @media (max-width: 991.98px) {
          font-size: ${size(35)};
        }
        @media (max-width: 575.98px) {
          font-size: 1.8rem;
          line-height: 1.4;
          text-align: center;
        }
      }

      .headline-2 {
        color: rgba(191, 182, 180, 0.5);
        font-size: ${size(29)};
        font-weight: 300;
        line-height: ${size(40)};
        @media (max-width: 991.98px) {
          font-size: ${size(24)};
          line-height: normal;
        }
        @media (max-width: 575.98px) {
          font-size: ${size(28)};
        }
      }

      .btn-group {
        margin-top: ${size(80)};

        button {
          width: 50%;
          max-width: unset;
          margin: 0;

          &:first-of-type {
            margin-right: ${size(20)};
          }
        }

        @media (max-width: 991.98px) {
          display: none;
        }
      }
    }

    .col-right {
      display: flex;
      flex-direction: column;

      .appraisal-block {
        padding: ${size(60)} ${size(45)} ${size(45)};
        display: flex;
        flex-direction: column;
        background: url(${mapInfo});
        background-size: cover;
        min-width: ${size(318)};
        max-width: 45rem;
        @media (max-width: 575.98px) {
          padding: 2rem;
          text-align: center;
        }

        &:first-of-type:not(:only-of-type) {
          margin-bottom: 5vh;
        }
      }

      h3 {
        color: #bfb6b4;
        font-size: ${size(56)};
        font-weight: 200;
        line-height: ${size(64)};
        margin-bottom: ${size(17)};
        @media (max-width: 575.98px) {
          font-size: ${size(28)};
          text-align: center;
        }
      }

      .text {
        color: #bfb6b4;
        font-size: ${size(16)};
        font-weight: 200;
      }

      .bold {
        font-weight: 500;
        margin-top: ${size(16)};
      }

      .ltv {
        color: #bfb6b4;
        font-size: ${size(30)};
        font-weight: 200;
        line-height: ${size(39)};
      }

      hr {
        background-color: rgba(191, 182, 180, 0.1);
        margin: ${size(20)} 0;
        height: 1px;
        display: inline-block;
        @media (max-width: 575.98px) {
          margin: ${size(15)} auto;
        }
      }

      button {
        display: none;
        @media (max-width: 991.98px) {
          display: block;
          margin-top: ${size(72)};
        }
        @media (max-width: 575.98px) {
          margin-top: ${size(30)};
          width: 100%;
        }
      }
    }
  }

  .cf {
    clear: both;
  }

  .map {
    width: 100%;
    height: 100%;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 5;
    @media (max-width: 575.98px) {
      position: absolute !important;
    }
  }

  footer {
    @media (min-width: 575.98px) {
      background: none !important;
    }
  }

  ${Input} {
    .normal-input {
      font-size: ${size(30)};

      &::placeholder {
        font-size: ${size(30)};
      }
    }

    @media (max-width: 450px) {
      .normal-input {
        font-size: ${size(20)};

        &::placeholder {
          font-size: ${size(20)};
        }
      }
    }
  }

  ${Select} {
    .oppono-select {
      &__option,
      &__single-value,
      &__input,
      &__control {
        font-size: ${size(22)};
        padding-left: 8px !important;;
      }
    }

    @media (max-width: 450px) {
      .oppono-select {
        &__option,
        &__single-value,
        &__input,
        &__control {
          font-size: ${size(20)};
        }
      }
    }
  }

  ${Container}.flex {
    display: flex;
  }

  .error-message {
    color: red;
    font-size: ${size(16)};
    font-weight: 400;
    margin-top: ${size(50)};
    text-align: center;
    display: block;

    a {
      font-size: ${size(18)};
      color: #bfb6b4;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

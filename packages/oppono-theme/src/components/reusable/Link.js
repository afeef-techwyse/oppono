import {connect} from 'frontity';

export default connect(Link);

function Link({onClick: click, libraries, actions, state, children, href, target, className = ''}) {
  const newHref = !!href ? href : '#';
  const isInternal = newHref.startsWith(state.source.api.replace('/wp-json', '')) || newHref.startsWith('/') || newHref.startsWith('#') || newHref.startsWith(state.frontity.url);
  let pathname = isInternal ? libraries.source.normalize(newHref) : newHref;
  let current = state.router.link === pathname;
  
  const onClick = event => {
    if ((!target || target === '_self') && isInternal) {
      window.scrollTo(0, 0);
      event.preventDefault();
      actions.router.set(pathname);
    }
    click && click();
  };
  return (
    <a href={pathname} target={target ? target : (isInternal ? undefined : '_blank')} className={`${current ? 'current ' : ''}${className}`} onClick={onClick}>
      {children}
    </a>
  );
}
  export function beaconScore(beacon_score) {
    return beacon_score?.[0].split('-')[0]+(beacon_score?.length>1?'+':'');
  }
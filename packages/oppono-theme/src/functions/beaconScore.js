export function beaconScore(beacon_score) {
  if (beacon_score?.length>1) {
    console.log(beacon_score?.length,beacon_score);
    const firstPart = beacon_score?.[0].split('-')[0];
    const lastPart = beacon_score?.[beacon_score?.length-1].split('-')[1];
    
    return firstPart + (lastPart?'-'+lastPart:'+')
  }
  return beacon_score?.[0]
}
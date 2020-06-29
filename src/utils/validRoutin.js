/**
 * Validate the input is a rountin number
 */
export default function validRoutin(routing) {
  if (routing.length !== 9) {
    return false;
  }

  // http://en.wikipedia.org/wiki/Routing_transit_number#MICR_Routing_number_format
  const checksumTotal =
    7 *
      (parseInt(routing.charAt(0), 10) +
        parseInt(routing.charAt(3), 10) +
        parseInt(routing.charAt(6), 10)) +
    3 *
      (parseInt(routing.charAt(1), 10) +
        parseInt(routing.charAt(4), 10) +
        parseInt(routing.charAt(7), 10)) +
    9 *
      (parseInt(routing.charAt(2), 10) +
        parseInt(routing.charAt(5), 10) +
        parseInt(routing.charAt(8), 10));

  const checksumMod = checksumTotal % 10;
  if (checksumMod !== 0) {
    return false;
  }
  return true;
}

const testNumbers = [
  '011103093',
  '067014822',
  '211274450',
  '211370545',
  '054001725',
  '011400071',
  '031201360',
  '026013673',
  '021302567',
  '053902197',
  '036001808',
  '011600033',
  '051000017',
  '026009593',
  '122101706',
  '121000358',
  '011400149',
  '011401928'
];

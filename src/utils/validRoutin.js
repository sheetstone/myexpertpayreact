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

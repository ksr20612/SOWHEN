type oneToNine = 0|1|2|3|4|5|6|7|8|9;
type d = 0|1|2|3|4|5|6|7|8|9;
type DD = `${0}${oneToNine}` | `${1|2}${d}` | `3${0|1}`;
type YYYY = `20${d}${d}`;
type MM = `0${oneToNine}` | `1${0|1|2}`;

export type DateString = `${YYYY}-${MM}-${DD}`;
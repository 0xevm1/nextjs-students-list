const CSV_HEAD = 'data:text/csv;charset=utf-8,';

// Adapted from https://stackoverflow.com/q/14964035
export function downloadCSV(csvString: string, title: string): void {
  const encodedUri = encodeURI(`${CSV_HEAD}${csvString}`);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `${title}`);
  document.body.appendChild(link); // Required for earlier versions of FireFox
  link.click();
}

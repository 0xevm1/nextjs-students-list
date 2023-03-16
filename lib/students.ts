export interface Student {
  id: string;
  name: string;
  email: string;
  twitter?: string;
}

export function getStudentsCSVString(students: Student[]): string {
  const studentBioKeys: (keyof Student)[] = ['id', 'name', 'email', 'twitter'];

  const header = studentBioKeys.join(',');
  const rows = students.map((student) => {

    return studentBioKeys.map((key) => student[key]?.includes(',')?student[key].replaceAll(",", "','"):student[key]).join(',');
  });

  const csvString = `${header}\n${rows.join('\r\n')}`;
  return csvString;
}

export interface IDoctor {
  id?: string;
  Name: string,
  nameInArabic: string;
  Price: string,
  Department: string,
  departmentInArabic: string
  Title: string,
  titleInArabic: string,
  Information?: string,
  InformationInArabic?: string,
  nationalID: string,
  city: string,
  area?: string,
  areaAR?: string,
  address?: string
  dpt?: string,
  dptAR?: string,
  status?: string,
  Clinic_Address?:string,
Clinic_Phone?:string
}

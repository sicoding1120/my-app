export interface Blog {
  title: string;
  subTitle: string;
  content: string;
  author: string;
  date: string | Date; // or Date
  kategori: string[];
    views: number;
    userId: number
}

export interface Profile {
  email: string;
  id_credential: number;
  role: "STUDENT" | "MENTOR" | "NONROLE";
}

export interface Mentor {
  id: string;
  takeOffice_at: string; // or Date
  expired_at: string; // or Date
  img: string;
  userId: number;
  class_id: number;
}

export interface UserType {
  id: number;
  name?: string;
  password: string;
  profile?: Profile;
  blog?: Blog[];
  mentor?: Mentor | null;
}

export interface ClassDetail {
  material: number;
  point: number;
  mentor?: { id: string };
  class_id: number;
}

export interface Class {
  id_credential: number;
  title: string;
  Kos: string;
  headerTitle: string;
  kategori: string[];
  isDiscount: boolean;
  url: string;
  aboutClass: string[];
  isCertivicate: boolean;
  classDetail?: ClassDetail;
}

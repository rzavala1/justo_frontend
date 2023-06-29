import { number } from "yup";

export interface HitData {
  id?: number;
  name?: string;
  description?: string;
  assignId?: number;
  createId?: number;
  status?: string;
  createUser?: userConection;
  assignUser?: userConection;
}
interface userConection {
  id: number;
  name: number;
}

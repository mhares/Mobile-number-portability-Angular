import { Organization } from "./organization";

export class Request {

  request_id: number;
  status: string;
  phoneNumber: string;
  fromOrganization: Organization;
  toOrganization: Organization;
  requestDate: Date;
}

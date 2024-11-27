import {Address, Email, Phone} from "./Shared";

export interface Lead {
    Id?: string;
    Name?: string;
    Type?: string;
    Company?: string;
    Role?: string;
    Phone?: Phone;
    Email?: Email;
    Addresses?: Address;
    Method?: string;
    Services?: string;
    Other?: string;
}

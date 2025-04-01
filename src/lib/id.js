import { Guid } from "js-guid";

export function newId() {
    const guid = new Guid();

    return guid.StringGuid;
}
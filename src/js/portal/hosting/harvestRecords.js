import request from "../request";

/*
 * Query the records of a service.
 */
export function harvestRecords(serviceUrl, layerId, offset, numresults, hasZ) {
    let portal = this;
    let url = `${serviceUrl}/${layerId}/query`;
    let parameters = {
        where: "1=1",
        outFields: "*",
        returnGeometry: true,
        returnZ: !!hasZ,
        resultOffset: offset,
        resultRecordCount: numresults,
        token: portal.token,
        f: "json"
    };
    let options = {
        withCredentials: portal.withCredentials
    };
    return request.get(url, parameters, options);
}

/* tslint:disable */
/* eslint-disable */
/**
 * Tacto Codechallange API
 * Dummy API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Department
 */
export interface Department {
    /**
     * 
     * @type {number}
     * @memberof Department
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Department
     */
    name: string;
}

export function DepartmentFromJSON(json: any): Department {
    return DepartmentFromJSONTyped(json, false);
}

export function DepartmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Department {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function DepartmentToJSON(value?: Department | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


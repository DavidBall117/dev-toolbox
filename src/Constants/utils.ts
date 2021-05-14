import uuid from 'uuid';

export enum UUIDVersion {
    Version1 = 1,
    Version4 = 4
};

export const generateUUID = (version: UUIDVersion = UUIDVersion.Version4): string => {
    switch (version) {
        case UUIDVersion.Version1:
            return uuid.v1();
        default:
            return uuid.v4();
    }
};

export const NILUUID = (): string => {
    return uuid.NIL;
}

export const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// TODO generate primitives
// TODO generate data object or array of object based on type given
// TODO allow data set to be generated in json
// TODO generate an INSERT SQL statement based on a given json object
// TODO separate constants and utilities

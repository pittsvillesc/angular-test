export interface Team {
    id: string;
    school: string;
    teamName: string;
    conference: string;
    region: string;
    abbreviation: string;
}

export enum Regions {
    BLANK = '',
    EAST = "East",
    WEST = "West",
}

export enum Conferences {
    BLANK = '',
    BOSTON = "BMHC",
    MICHIGAN = "MCHC",
    MINNESOTA = "MCHA",
    MIDWEST = "CCHA",
    NEW_ENGLAND = "ECAC",
    HOCKEY_EAST = "Hockey East",
    NEW_YORK = "NYCAC",
    WEST = "WCHA",
}





export interface Location {
    name: string;
}

export interface Industry {
    name: string;
}

export interface Size {
    name: string;
    short_name: string;
}

export interface Refs {
    landing_page: string;
    jobs_page: string;
    mini_f1_image: string;
    f2_image: string;
    logo_image: string;
    f1_image: string;
    f3_image: string;
}

export interface RootObject3 {
    description: string;
    locations: Location[];
    industries: Industry[];
    tags: any[];
    short_name: string;
    name: string;
    publication_date: Date;
    model_type: string;
    twitter?: any;
    id: number;
    size: Size;
    refs: Refs;
}
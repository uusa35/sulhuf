export interface User {
    [key:string] : string;
    id: string,
    name: string,
    name_ar: string,
    name_en: string,
    image?: string,
    email: string,
    mobile?: string,
    description_ar?: string,
    description_en?: string,
}

export interface Users {
    data: User[],
    links?: Object,
    meta?: Object,
    user?: {
        element: User,
        categories? : Categories[],
        products? : Product[]
    }
}

export interface locale {
    lang: string;
    isRTL: boolean;
    dir: string;
    otherLang: string;
}

export type MainContextType = {
    trans: (name: string) => string;
    getLocalized: (name?: string) => string;
    getAsset: (name: string) => string;
    getThumb: (name: string) => string;
    getMedium: (name: string) => string;
    getLarge: (name: string) => string;
    getFileUrl: (name: string) => string;
    classNames: (classes: any) => any;
}

export type Auth = {
    id? : string | number | undefined;
    email? : string;
    username : string;
    password?: string|number;
    token? : string | number;
    isLogged : boolean
}


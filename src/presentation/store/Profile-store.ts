import { create } from "zustand"

export interface ProfileStore {
    name: string,
    email: string

    changeProfile: (name: string, email: string) => void;
}



export const useProfileStore = create<ProfileStore>()((set, get) => ({
    name: 'John Doe',
    email:'johnDoe@test.com',

    changeProfile: (name: string, email: string)=> {
        set({name, email})
    }
}))
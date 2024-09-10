type MahasiswaRespons = {
    gender: string,
    name: NameMahasiswa,
    email: string,
    dob: DobMahasiswa,
    phone: string,
    id: IdMahasiswa,
    picture: PictureMahasiswa
}

type NameMahasiswa = {
    title: string,
    first: string,
    last: string
}

type IdMahasiswa = {
    name: string,
    value: string
}

type PictureMahasiswa = {

    large: string,
    medium: string,
    thumbnail: string

}

type DobMahasiswa = {
    date: string,
    age: number
}
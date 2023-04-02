import data from './../../resource/countries.json';
export class CountryService {
    getCountries() {
        // return fetch('data/countries.json').then(res => res.json())
        //     .then(d => d.data);
        const result = [];
        data.map((datas) => {
            result.push(datas)
        });
        return result;
    }
}
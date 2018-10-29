export interface IStarWars{
    name : string,
    model : string,
    manufacturer : string,
    cost_in_credits : string,
    length : string,
    max_atmosphering_speed : string,
    crew : string,
    passengers : string,
    cargo_capacity : string,
    consumables : string,
    hyperdrive_rating : string,
    MGLT : string,
    starship_class : string,
    pilots : string[],
    films : string[],
    created : string,
    edited : string,
    url : string
}

export class StarWars implements IStarWars{

    constructor(
        public name : string,
        public model : string,
        public manufacturer : string,
        public cost_in_credits : string,
        public length : string,
        public max_atmosphering_speed : string,
        public crew : string ,
        public passengers : string,
        public cargo_capacity : string,
        public consumables : string,
        public hyperdrive_rating : string,
        public MGLT : string,
        public starship_class : string,
        public pilots : string[],
        public films : string[],
        public created : string,
        public edited : string,
        public url : string
    ){    }

}
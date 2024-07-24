class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    confrontoPadrone(altroPadrone) {
        if (this.ownerName === altroPadrone.ownerName) {
            return `${this.petName} ha lo stesso padrone di ${altroPadrone}`
        } else {
            return false;
        }
    }
};
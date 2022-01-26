import {v4 as uuid} from 'uuid';
interface IProductDTO {
	id?: string;
	name: string;
	description:string;
	price: number;
	amount: number;
}

class Product {
	id? : string;
	private name : string;
	private description : string;
	private price : number;
	private amount : number;

	constructor({id, name,description,price,amount} : IProductDTO) {
		this.id ? this.id = id : this.id = uuid();
		this.name = name;
		this.description = description;
		this.price = price;
		this.amount = amount;
	}
	// getters
	get getName() {
		return this.name;
	}
	get getDescription() {
		return this.description;
	}
	get getPrice() {
		return this.price;
	}
	get getAmount() {
		return this.amount;
	}

	// setters
	set setName(name: string){
		this.name = name;
	}
	set setDescription(description: string) {
		this.description = description;
	}
	set setPrice(price: number) {
		this.price = price;
	}

	set setAmonut(amount: number) {
		this.amount = amount;
	}

}

export {Product};
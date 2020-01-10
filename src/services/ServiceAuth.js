class ServiceAuth{

    static url = 'http://localhost:8000/api/authenticate';

    static autenticated(){

        if(localStorage.getItem('token')!=='undefined'){
            return true;
        }
        else{
            return false;
        }

    }

    static async login(name, password){

        const data = { name:name, password:password }

        const response = await fetch(this.url, { method: 'POST', // or ‘PUT’
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' } });

        localStorage.setItem('token', data);

        return response.json();
    }

    static logOut(){
        localStorage.clear();
    }
}

export default ServiceAuth;
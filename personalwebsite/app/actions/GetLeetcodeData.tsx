
const GetLeetCodeData  = async() =>{
    try{

        const response = await fetch('https://leetcode-stats-api.herokuapp.com/abhishek20010525/' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        } )
        const data = await response.json();
        return data.totalSolved;
    }catch(err){
        return -1;
    }
}
export default GetLeetCodeData;
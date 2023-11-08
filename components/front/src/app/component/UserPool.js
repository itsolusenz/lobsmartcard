import { CognitoUserPool } from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: "ap-southeast-1_j3pKjNtoC",
    ClientId: "3894j3pqig36mp1fhpr9dv294b",

}
export default new CognitoUserPool(poolData);

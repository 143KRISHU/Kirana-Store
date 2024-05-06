const backendMainDomainURL = "http://localhost:3000";

const backendRoutesAPI = {
      signup : {
            url : `${backendMainDomainURL}/api/v1/customer/signup`,
            method : "post"
      },
      signin : {
            url : `${backendMainDomainURL}/api/v1/customer/login`,
            method : "post"
      },
      signout : {
            url : `${backendMainDomainURL}/api/v1/customer/logout`,
            method : "post"
      },
      current_user : {
            url : `${backendMainDomainURL}/api/v1/customer/customer-details`,
            method : "get"
      },
      admin:{
            showAllUser:{
                  url:`${backendMainDomainURL}/api/v1/admin/show-all-customer`,
                  method:"get"
            },
            updateUserRole:{
                  url:`${backendMainDomainURL}/api/v1/admin/customer-role-update`,
                  method:"post"
            }
      }
}
export default backendRoutesAPI
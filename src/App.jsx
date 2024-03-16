import React from 'react'
import Card from './card'

function App() {

const data = [
  {
    plan:"FREE",
    price:0,
    user : "Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    PublicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    subdomain:"Free Subdomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isReports:false

  },
  {
    plan:"PLUS",
    price:9,
    user : "5 Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    PublicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:false

  },
  {
    plan:"PRO",
    price:49,
    user : "Users",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    PublicProject:"Unlimited Public Projects",
    isPublicProject:true,
    communityAccess:"Community Access",
    isCommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    subdomain:"Free Subdomains",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true

  }
]


  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e,i)=>{
              return <Card details={e} key={i}/>
            })
          }

        </div>
      </div>
    </section>
  </>
}


export default App
function Card({details}){

    return <>
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
              <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
              <hr />
              <ul className="fa-ul">
                <li className={details.isUser?"":"text-muted"}><span className="fa-li"><i className={details.isUser?"fas fa-check":"fas fa-times"}></i></span>{details.plan!=="FREE"?<b>{details.plan==="PRO"?"Unlimited":""} {details.user}</b> : details.user}</li>
                <li className={details.isStorage?"":"text-muted"}><span className="fa-li"><i className={details.isStorage?"fas fa-check":"fas fa-times"}></i></span>{details.PublicProject}</li>
                <li className={details.isPublicProject?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{details.communityAccess}</li>
                <li className={details.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className="fas fa-check"></i></span>{details.storage}</li>
                <li className={details.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={details.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{details.PrivateProjects}
                </li>
                <li className={details.isSupport?"":"text-muted"}><span className="fa-li"><i className={details.isSupport?"fas fa-check":"fas fa-times"}></i></span>{details.support}
                </li>
                <li className={details.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={details.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PRO"?<span><b>Unlimited </b>{details.subdomain}</span>:details.subdomain}
                </li>
                <li className={details.isReports?"":"text-muted"}><span className="fa-li"><i className={details.isReports?"fas fa-check":"fas fa-times"}></i></span>{details.reports}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
    </>
}
export default Card
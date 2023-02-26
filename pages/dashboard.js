import { useState, useEffect } from "react";

export default function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);
    useEffect(()=>{
       async function DataDashboard() {
         const responsive = await fetch('http://localhost:4000/dashboard');
         const data = await responsive.json();
         setDashboardData(data);
         setIsLoading(false);
       }
       DataDashboard()
    },[]) 
    if (isLoading){
      return <h2>isLoading....</h2>
    }
    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts -- {dashboardData.posts}</h2>
            <p>{dashboardData.likes}</p>
        </div>
    )
}
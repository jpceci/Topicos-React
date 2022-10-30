// @mui material components
import Grid from "@mui/material/Grid";

import MDBox from "../../components/MDBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";

import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import CardClients from "./components/CardClients";
// import divider from "assets/theme/components/divider";

function Dashboard() {
  // const list1 = [
  //   {
  //     id: 'graciela',
  //     firstName: 'Graciela',
  //     lastName: 'Guzmán',
  //     email: 'noragrey088@gmail.com',
  //     phoneNumber: '72122175',
  //     profilePicture: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143335283/original/2274a39adc5a8492e073b610dbcdeb1a2f900105/draw-anime-profile-picture-for-you-bd1d.jpg',
  //     linkFacebook: 'www.facebook.com',
  //     status: 1
  //   },
  //   {
  //     id: 'yuliana',
  //     firstName: 'Yuliana',
  //     lastName: 'Montaño',
  //     email: 'yulianam@gmail.com',
  //     phoneNumber: '72122175',
  //     profilePicture: 'https://i.pinimg.com/originals/2c/73/5a/2c735a6005b3683ef50732d2d72e5b78.jpg',
  //     linkFacebook: 'www.facebook.com',
  //     status: 1
  //   },
  //   {
  //     id: 'mauricio',
  //     firstName: 'Mauricio',
  //     lastName: 'Sauza',
  //     email: 'msauza@gmail.com',
  //     phoneNumber: '72122175',
  //     profilePicture: 'https://t2.ea.ltmcdn.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_orig.jpg',
  //     linkFacebook: 'www.facebook.com',
  //     status: 1
  //   },
  // ];
  // const list2 = [
  //   {
  //     id: 'carlos',
  //     firstName: 'Carlos',
  //     lastName: 'Miranda',
  //     email: 'carlosmiranda@gmail.com',
  //     phoneNumber: '67730956',
  //     profilePicture: 'https://static-cse.canva.com/blob/759723/DrobotDeanCanva.jpg',
  //     linkFacebook: 'www.facebook.com',
  //     status: 2
  //   },
  //   {
  //     id: 'erik',
  //     firstName: 'Erik',
  //     lastName: 'Reyes',
  //     email: 'le_soleto@hotmail.com',
  //     phoneNumber: '78028007',
  //     profilePicture: 'https://play-lh.googleusercontent.com/xlnwmXFvzc9Avfl1ppJVURc7f3WynHvlA749D1lPjT-_bxycZIj3mODkNV_GfIKOYJmG',
  //     linkFacebook: 'www.facebook.com',
  //     status: 2
  //   },
  // ];
  // const list3 = [
  //   {
  //     id: 'samuel',
  //     firstName: 'Samuel',
  //     lastName: 'De Luque',
  //     email: 'vegetta777@gmail.com',
  //     phoneNumber: '77696743',
  //     profilePicture: 'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/4601f420c5e73a28d71b8871e23de465-1597927018/FLYXXIII/draw-anime-profile-picture-for-you-bd1d.png',
  //     linkFacebook: 'www.facebook.com',
  //     status: 3
  //   },
  // ];
  // const list4 = [
  //   {
  //     id: 'gary',
  //     firstName: 'Renato',
  //     lastName: 'Alvarez',
  //     email: 'renatula@gmail.com',
  //     phoneNumber: '78107316',
  //     profilePicture: 'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/64427cabebbc1a83d91ec8ad45eed854-1591508473/phucat103/draw-anime-profile-picture-for-you-bd1d.png',
  //     linkFacebook: 'www.facebook.com',
  //     status: 4
  //   },
  // ];
  const [backendData, setBackendData] = useState([{}]);

  const fetchUserData = async () => {
    const response = await fetch("https://calm-wildwood-29871.herokuapp.com/getusersdata");
    const data = await response.json();
    setBackendData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUserData();
    console.log(backendData);
  },[])

  
  const list1 = backendData[0];
  const list2 = backendData[1];
  const list3 = backendData[2];
  const list4 = backendData[3];

  // useEffect(() => {
  //   fetch("https://calm-wildwood-29871.herokuapp.com/getusersdata").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data);
  //       console.log(data);
  //     }
  //   )
  // }, [])


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Prospectos de Cliente"
                description="Solicitudes: 3"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Contactados"
                description=""
                color="info"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Activos"
                description=""
                color="success"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Habituales"
                description=""
                color="warning"
              />
            </MDBox>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {list1.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {list2.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {list3.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {list4.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

function getClient() {
  return "3";
}

export default Dashboard;

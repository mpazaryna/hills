import React from "react";
import { StaticQuery, graphql } from "gatsby";

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;
  const image_file = data.site.siteMetadata.image_file;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "avenir"
      }}
    >
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5
        }}
      >
        {description}
      </p>
      <center>
        <img src="http://dsnkmgtj1baxm.cloudfront.net/images/IMG_20181022_142251_056.jpg" height="500" width="500"/>
      </center>
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              image_file
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;

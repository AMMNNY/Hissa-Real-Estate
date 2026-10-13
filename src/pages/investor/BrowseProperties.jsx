import PageContainer from '../../components/common/PageContainer';
import data from "../../DummyData.json"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import "../PagesDesign/BrowseProperties.css"
function BrowseProperties() {
const navigate = useNavigate();
const displayData = data.map((e) => (
  <Card  key={e.id}
  sx={{
    width: "100%",
    minWidth: 0,
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
  }}>

    <CardMedia
      component="img"
      sx={{ height: 170 }}
      image={e.image}
      alt={e.title}
    />

    <CardContent>

      <Typography
        variant="h6"
        sx={{ fontWeight: 600 }}
      >
        {e.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <LocationPinIcon sx={{ fontSize: 16, color: "gray" }} />

        <Typography sx={{ fontSize: 14, color: "gray" }}>
          {e.location}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2
        }}
      >

        <Box>
          <Typography variant="body2" color="text.secondary">
            Property Value
          </Typography>
          <Typography fontWeight={600}>
            ${e.totalPrice.toLocaleString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Expected Return
          </Typography>
          <Typography fontWeight={600}>
            {e.expectedReturn}%
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Share Price
          </Typography>
          <Typography fontWeight={600}>
            ${e.sharePrice.toLocaleString()}
          </Typography>
        </Box>

      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Box
          sx={{
            height: 8,
            backgroundColor: "#E5E7EB",
            borderRadius: 5
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: `${((e.totalShares - e.availableShares) / e.totalShares) * 100}%`,
              backgroundColor: "#065F46",
              borderRadius: 5
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 1
          }}
        >
          <Typography variant="body2">
            {Math.round(
              ((e.totalShares - e.availableShares) / e.totalShares) * 100
            )}% funded
          </Typography>

          <Button
            onClick={() => navigate(`/properties/${e.id}`)}
            size="small"
            sx={{
              color: "#065F46",
              backgroundColor: "#D1FAE5",
              textTransform: "none"
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

    </CardContent>

  </Card>
));
return (
  <PageContainer>
    <Box className="browse-properties">
      <div className="browse-header">
        <div>
          <h1 className="browse-label" >Browse Properties</h1>

          <p>
            Pick a property and buy the share that fits your budget.
          </p>
        </div>
      </div>

      <div className="properties-section">
        <div className="properties-heading">
          <h2>Available Properties</h2>
          <p>Explore investment opportunities</p>
        </div>

        <div className="properties-grid">
          {displayData}
        </div>
      </div>
    </Box>
  </PageContainer>
);
}

export default BrowseProperties;

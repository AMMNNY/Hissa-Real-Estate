    import { useState } from "react";
    import PageContainer from "../../components/common/PageContainer";
    import { useParams } from "react-router-dom";
    import data from "../../DummyData.json";
    import LocationOnIcon from "@mui/icons-material/LocationOn";
    import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
    import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
    import SquareFootIcon from "@mui/icons-material/SquareFoot";
    import "../PagesDesign/PagesDesign.css";
    import BuySharesDialog from "./BuySharesDialog"
function PropertyDetails() {
    const [open, setOpen] = useState(false);

    const handleConfirm = (percentage) => {
        console.log('Selected percentage:', percentage);
    };
    const { id } = useParams();
    const property = data.find((item) => String(item.id) === id);

    if (!property) {
        return (
        <PageContainer>
            <div className="property-not-found">
            <h2>Property Not Found</h2>
            <p>The property you're looking for doesn't exist.</p>
            </div>
        </PageContainer>
        );
    }

    const fundedPercentage =
        ((property.totalShares - property.availableShares) /
        property.totalShares) *
        100;

    return (
        <PageContainer>
        <main className="property-details-page">
            <div className="property-page-header">
            <span className="property-label">PROPERTY DETAILS</span>
            <h1>{property.title}</h1>

            <p className="property-location">
                <LocationOnIcon />
                {property.location}
            </p>
            </div>

            <div className="property-main-grid">
            <section className="property-information">
                <div className="property-image-container">
                <img
                    src={property.image}
                    alt={property.title}
                    className="property-main-image"
                />
                <span className="property-type">
                    {property.type}
                </span>
                </div>

                <div className="property-description">
                <h2>About This Property</h2>
                <p>
                    {property.description ||
                    "Explore this real estate investment opportunity and learn more about the property."}
                </p>
                </div>

                <div className="property-features">
                <h2>Property Features</h2>

                <div className="features-grid">
                    <div className="feature-item">
                    <SquareFootIcon />
                    <div>
                        <span>Area</span>
                        <strong>{property.area} m²</strong>
                    </div>
                    </div>

                    <div className="feature-item">
                    <BedOutlinedIcon />
                    <div>
                        <span>Bedrooms</span>
                        <strong>{property.bedrooms ?? "N/A"}</strong>
                    </div>
                    </div>

                    <div className="feature-item">
                    <BathtubOutlinedIcon />
                    <div>
                        <span>Bathrooms</span>
                        <strong>{property.bathrooms ?? "N/A"}</strong>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <aside className="investment-card">
                <div className="investment-card-header">
                <span>Investment Overview</span>
                <span className="investment-status">
                    {property.status || "Available"}
                </span>
                </div>

                <div className="investment-value">
                <span>Total Property Value</span>
                <h2>
                    ${property.totalPrice.toLocaleString()}
                </h2>
                </div>

                <div className="investment-return">
                <span>Expected Annual Return</span>
                <strong>{property.expectedReturn}%</strong>
                </div>

                <div className="investment-share-price">
                <span>Price Per Share</span>
                <strong>
                    ${property.sharePrice.toLocaleString()}
                </strong>
                </div>

                <div className="investment-divider" />

                <div className="shares-heading">
                <span>Funding Progress</span>
                <strong>{Math.round(fundedPercentage)}%</strong>
                </div>

                <div className="funding-progress">
                <div
                    className="funding-progress-fill"
                    style={{
                    width: `${fundedPercentage}%`,
                    }}
                />
                </div>

                <div className="shares-availability">
                <span>
                    {property.availableShares} shares available
                </span>
                <span>
                    {property.totalShares} total shares
                </span>
                </div>

                <button
                onClick={()=>setOpen(true)}
                className="buy-shares-button"
                type="button"
                disabled={property.availableShares === 0}
                >
                {property.availableShares === 0
                    ? "Fully Funded"
                    : "Buy Shares"}
                </button>
                <BuySharesDialog
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={handleConfirm}
                />
                <p className="investment-note">
                Review the property details before making an
                investment decision.
                </p>
            </aside>
            </div>
        </main>
        </PageContainer>
    );
    }

    export default PropertyDetails;

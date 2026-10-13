import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import "../PagesDesign/BuySharesDialog.css";

export default function BuySharesDialog({ open, onClose, onConfirm }) {
    const [selectedPercentage, setSelectedPercentage] =useState(null);
    const percentages = [1, 5, 7, 10];

    const handleClose = () => {
        setSelectedPercentage(null);
        onClose();
    };

    const handleConfirm = () => {
        onConfirm(selectedPercentage);
        setSelectedPercentage(null);
    };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{ className: 'shares-dialog' }}
        >
        <DialogContent className="shares-content">
            <div className="shares-header">
            <div>
                <h2>Buy Shares</h2>
                <p>Choose your investment share</p>
            </div>
            <button className="shares-close" onClick={handleClose}>
                &times;
            </button>
            </div>

            <div className="shares-options">
            {percentages.map((percentage) => (
                <button
                key={percentage}
                className={`shares-option ${
                    selectedPercentage === percentage ? 'selected' : ''
                }`}
                onClick={() => setSelectedPercentage(percentage)}
                >
                <span>{percentage}%</span>
                <small>Ownership</small>
                </button>
            ))}
            </div>

            <div className="shares-price">
            <p>Estimated Price</p>
            <h3>JOD 1,000</h3>
            <span>Final amount will be calculated at confirmation</span>
            </div>

            <div className="shares-actions">
            <Button onClick={handleClose} className="cancel-btn">
                Cancel
            </Button>

            <Button
                onClick={handleConfirm}
                className="confirm-btn"
                disabled={selectedPercentage === null}
            >
                Confirm Purchase
            </Button>
            </div>
        </DialogContent>
        </Dialog>
    );
}
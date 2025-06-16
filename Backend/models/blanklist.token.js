const mongoose = require('mongoose');


const blanklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24 // 24 hours in seconds
    }
});

const BlanklistToken = mongoose.model('BlanklistToken', blanklistTokenSchema);
module.exports = BlanklistToken;
// This model is used to store tokens that have been blacklisted, preventing their reuse.
// The `createdAt` field is set to expire after 24 hours, automatically removing old tokens from the database.
// This helps in managing the blacklist efficiently and ensures that tokens are not kept indefinitely.
// The `token` field is unique to prevent duplicate entries for the same token.
// The `expires` option in the `createdAt` field ensures that the token will be automatically removed from the database after 24 hours, keeping the blacklist clean and manageable.
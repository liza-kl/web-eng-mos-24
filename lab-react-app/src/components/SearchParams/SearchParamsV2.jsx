/**
 * Einführung vom useState Hook
 */
import { useState } from "react";

export const SearchParamsV2 = () => {
const [location, setLocation] = useState("");
return (
    <div className="search-params">
    <form>
        <label htmlFor="location">
        Location
        <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            />
        </label>
        <button>Submit</button>
    </form>
    </div>
);
};

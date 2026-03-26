import React, { useState } from "react";
import Hero from "../../sections/ilmuan/hero/hero";
import Card from "../../sections/ilmuan/card/card";

const Ilmuan = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Card searchQuery={searchQuery} />
        </div>
    );
};

export default Ilmuan;

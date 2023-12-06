import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import Modall from "./Modall";

function Application() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Application">
      
      <Button size='huge' color="red"
        
        onClick={() => {
          setModalOpen(true);
        }}
      >
        End Test
      </Button>

      {modalOpen && <Modall setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Application;
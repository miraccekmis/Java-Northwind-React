import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn() {
    return (
      <div>
        <Menu.Item>
          <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQHymRx1C_Phsg/profile-displayphoto-shrink_200_200/0/1617893029257?e=1626307200&v=beta&t=G_wy3-wdH_5U9Cw3zWtNoyaNGUQyfd-K4s94ybMETdA" />
          <Dropdown pointing="top left" text="Miraç">
            <Dropdown.Menu>
              <Dropdown.Item text="Bilgilerim" icon="info"/>
              <Dropdown.Item text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </div>
    );
}

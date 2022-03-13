import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
export default function Footer() {
  return (
    <>
      {" "}
      <br /> <br />
      <h6>Brand Directory:</h6>
      <p
        style={{
          fontSize: "12px",
          color: "grey",
          fontFamily: "sans-serif",
        }}
      >
        MOST SEARCHED FOR ON KaeshurKart: OPPO | A16KVivo | Y33TOPPO | Reno7
        5GOPPO | Reno7 | Pro | 5GiPhone | 13iPhone | 13 | ProiPhone | 13 | Pro |
        MaxiPhone | 13 | MiniKaeshurkart | QuickBooksKaeshurkart | Help |
        CentreKaeshurkart | Track | OrdersKaeshurkart | Manage |
        OrdersKaeshurkart | Return | OrdersKaeshurkart | Gift | Cards |
        StoreKaeshurkart | Axis | Bank | Credit | CardKaeshurkart | Pay | Later
        | CameraCanon | CameraSony | CameraCanon | DSLRNikon | DSLR |
        LAPTOPS:Microsoft | Surface | Go | Pentium | Gold | 64GBMicrosoft |
        Surface | Go | Pentium | 128GBBranded | LaptopsApple | LaptopsAcer |
        LaptopsLenovo | LaptopsDell | LaptopsAsus | LaptopsHP | LaptopsGaming |
        Laptops2 | in | 1 | LaptopsBusiness | Laptops | TVS:Nokia | TVPanasonic
        | TVThomson | TVVu | TVRealme | TVMotorola | TVOnePlus | TVsLG |
        TVTVSony | TVSamsung | TVAndroid | TelevisionIffalcon | TvMi | TV |
        LARGE | APPLIANCES:Washing | MachinesRefrigeratorsAir |
        ConditionersElectric | CookersElectric | Jug(Heater) | / | Travel |
        KettlesInduction | CooktopsInverters | / | stabilizerIrons | / | Iron |
        BoxMixer | Grinder | JuicerWet | GrindersChimneysMicrowave | OvensVacuum
        | CleanersWater | PurifierFan | CLOTHING:Men | ShirtsKurta |
        PajamaKurtasMen | T-ShirtsJeansSareeDressesKids | DressesDesigner |
        Salwar | SuitsBraDesigner | KurtisTrack | PantMen | KurtasGym |
        WearParty | DressesPalazzo | SuitsBoys | ClothingGlovesNightyMaxi |
        DressesAnarkaliGownsCulottesSalwar | SuitsKurtisDesigner |
        SareesLeggingsShortsGeorgette | SareesEthnic | WearBriefs & Trunks |
        FOOTWEAR:ShoesAdidas | ShoesReebok | ShoesNike | ShoesPuma |
        ShoesBootsBata | ShoesWoodland | ShoesSkechers | ShoesSneakersWomens |
        BootsSports | ShoesLoafersSandalsLotto | Sports | ShoesCasual |
        ShoesWomens | Skechers | ShoesAsics | Sports | ShoesFormal | ShoesSchool
        | Shoes.
      </p>
      <br />
      <h6>Kaeshurkart: The One-stop Shopping Destination</h6>
      <p
        style={{
          fontSize: "12px",
          color: "grey",
          fontFamily: "sans-serif",
        }}
      >
        E-commerce is revolutionizing the way we all shop in India. Why do you
        want to hop from one store to another in search of the latest phone when
        you can find it on the Internet in a single click? Not only mobiles.
        Kaeshurkart houses everything you can possibly imagine, from trending
        electronics like laptops, tablets, smartphones, and mobile accessories
        to in-vogue fashion staples like shoes, clothing and lifestyle
        accessories; from modern furniture like sofa sets, dining tables, and
        wardrobes to appliances that make your life easy like washing machines,
        TVs, ACs, mixer grinder juicers and other time-saving kitchen and small
        appliances; from home furnishings like cushion covers, mattresses and
        bedsheets to toys and musical instruments, we got them all covered. You
        name it, and you can stay assured about finding them all here. For those
        of you with erratic working hours, Kaeshurkart is your best bet. Shop in
        your PJs, at night or in the wee hours of the morning. This e-commerce
        never shuts down.
      </p>
      <div
        style={{
          backgroundColor: "rgb(23,35,55)",
          color: "white",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid xs={4} xl={4}>
              <h4 style={{ color: "grey" }}>About</h4>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>KaeshurKart Stories</p>
            </Grid>
            <Grid xs={4} xl={4}>
              <h4 style={{ color: "grey" }}>Help</h4>
              <p>Payments</p>
              <p>Shipping</p>
              <p>Cancellation and return</p>
              <p>FAQ</p>
            </Grid>
            <Grid xs={4} xl={4}>
              <h4 style={{ color: "grey" }}>Social</h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Youtube</p>
              <p>FAQ</p>
            </Grid>
          </Grid>
          <Grid xs={12} xl={12}>
            <center>
              <p>
                KaeshurKart @ {new Date().getFullYear()} | Developer : Mudasir
                Pandith
              </p>
            </center>
          </Grid>
        </Box>
      </div>
    </>
  );
}

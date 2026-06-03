"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Dishes",
          id: "dishes",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Experience",
          id: "story-events",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tibet Momo IG2"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Fresh. Authentic. Unforgettable."
      description="Handcrafted Tibetan Momos, Signature Sauces & Flavor-Packed Bowls Served Fresh Daily In Pondicherry."
      tag="Pondicherry's Most Loved Momo Experience."
      buttons={[
        {
          text: "🛒 Order Online",
          href: "#",
        },
        {
          text: "📍 Visit Us Today",
          href: "#",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg",
          alt: "Customer Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-man-black-shirt-poses-against-dark-background-standing-studio_613910-15100.jpg",
          alt: "Customer Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-person-football-game_23-2149015522.jpg",
          alt: "Customer Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-man-wearing-suit_23-2148831125.jpg",
          alt: "Customer David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-outdoors_23-2149042108.jpg",
          alt: "Customer Priya",
        },
      ]}
      avatarText="Rated By Hundreds Of Happy Customers"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic_141793-11564.jpg?_wi=1"
      videoSrc="http://img.b2bpic.net/free-photo/high-angle-women-learning-make-sushi_23-2151202905.jpg?_wi=1"
      imageAlt="Steaming momos and happy customers"
      showDimOverlay={true}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="A Small Place With Big Flavors"
      description="Tibet Momo IG2 started with a simple mission:\n\nTo bring authentic Tibetan-inspired comfort food to Pondicherry while creating memorable experiences for families, couples, students, and food lovers.\n\nOur cozy atmosphere, rooftop dining, signature sauces, and handcrafted momos have made us a local favorite.\n\nWhether you're stopping by for a quick bite or sharing a meal with loved ones, every dish is prepared with passion and flavor at its heart."
      imageSrc="http://img.b2bpic.net/free-photo/man-eating-food-restaurant_23-2150520072.jpg"
      imageAlt="Cozy restaurant interior with customers"
    />
  </div>

  <div id="dishes" data-section="dishes">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Tibet Momo IG2",
          name: "Tibetan Steamed Momos",
          price: "₹120",
          rating: 5,
          reviewCount: "250+",
          imageSrc: "http://img.b2bpic.net/free-photo/side-close-up-view-dish-sauces-bowls-yellow-sauce-rice-sour-cream-black-pepper-herbs-colorful-spices-around-white-plate-stuffed-cabbage-black-table_140725-110538.jpg",
          imageAlt: "Tibetan Steamed Momos",
        },
        {
          id: "2",
          brand: "Tibet Momo IG2",
          name: "Schezwan Fried Momos",
          price: "₹150",
          rating: 5,
          reviewCount: "180+",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-meal-with-sambal-arrangement_23-2149076075.jpg",
          imageAlt: "Schezwan Fried Momos",
        },
        {
          id: "3",
          brand: "Tibet Momo IG2",
          name: "Pan Sauce Fried Momos",
          price: "₹160",
          rating: 5,
          reviewCount: "300+",
          imageSrc: "http://img.b2bpic.net/free-photo/gurza-azerbaijani-dumplings-served-with-yoghurt-pottery-ban_140725-10559.jpg",
          imageAlt: "Pan Sauce Fried Momos",
        },
        {
          id: "4",
          brand: "Tibet Momo IG2",
          name: "Maggi Momo Bowl",
          price: "₹180",
          rating: 5,
          reviewCount: "220+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chinese-hot-pot_23-2149529776.jpg",
          imageAlt: "Maggi Momo Bowl",
        },
        {
          id: "5",
          brand: "Tibet Momo IG2",
          name: "Chicken Burger",
          price: "₹190",
          rating: 4,
          reviewCount: "100+",
          imageSrc: "http://img.b2bpic.net/free-photo/american-burger-with-chicken-bacon-homemade-barbecue-sauce_2829-13688.jpg",
          imageAlt: "Chicken Burger",
        },
        {
          id: "6",
          brand: "Tibet Momo IG2",
          name: "Virgin Mojito",
          price: "₹90",
          rating: 5,
          reviewCount: "150+",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-drink-with-lemon_1220-448.jpg",
          imageAlt: "Virgin Mojito",
        },
      ]}
      title="Customer Favorites"
      description="Explore our most loved dishes, from juicy steamed momos to our unique Maggi Momo Bowl. Each bite is crafted for an unforgettable experience."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "1",
          title: "Authentic Taste",
          descriptions: [
            "Recipes inspired by Tibetan flavors and local favorites.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/instagram-logo-3d_23-2152000279.jpg",
          imageAlt: "instagram logo icon social media",
        },
        {
          id: "2",
          title: "Signature Sauces",
          descriptions: [
            "The famous spicy sauce that customers keep talking about.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-women-learning-make-sushi_23-2151202905.jpg?_wi=2",
          imageAlt: "instagram logo icon social media",
        },
        {
          id: "3",
          title: "Rooftop Dining",
          descriptions: [
            "Enjoy your food in a relaxed rooftop setting.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-traditional-asian-dumplings-with-meat-vegetables-served-with-soy-sauce-plate-rustic_141793-11564.jpg?_wi=2",
          imageAlt: "instagram logo icon social media",
        },
        {
          id: "4",
          title: "Pocket-Friendly",
          descriptions: [
            "Great food without premium restaurant pricing.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg",
          imageAlt: "instagram logo icon social media",
        },
        {
          id: "5",
          title: "Family Friendly",
          descriptions: [
            "Perfect for couples, families, and small groups.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-man-black-shirt-poses-against-dark-background-standing-studio_613910-15100.jpg",
          imageAlt: "instagram logo icon social media",
        },
        {
          id: "6",
          title: "Made Fresh Daily",
          descriptions: [
            "Fresh ingredients and freshly prepared dishes.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-person-football-game_23-2149015522.jpg",
          imageAlt: "instagram logo icon social media",
        },
      ]}
      title="More Than Just Momos"
      description="Discover what makes Tibet Momo IG2 Pondicherry's favorite spot for authentic Tibetan flavors and memorable dining experiences."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Siddharth V.",
          handle: "@SiddharthV",
          testimonial: "One of the best spots to have authentic Tibetan food. The saucy momo was exceptional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg",
          imageAlt: "Siddharth V.",
        },
        {
          id: "2",
          name: "Priya R.",
          handle: "@PriyaR",
          testimonial: "The taste was awesome. The Maggi with momo combo is breathtaking.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-eating-seaweed-snacks_23-2150872521.jpg",
          imageAlt: "Priya R.",
        },
        {
          id: "3",
          name: "Karthik S.",
          handle: "@KarthikS",
          testimonial: "Fresh, tasty and full of flavor. The momo was perfectly cooked.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-serving-cup-coffee-customer_1170-635.jpg",
          imageAlt: "Karthik S.",
        },
        {
          id: "4",
          name: "Anjali D.",
          handle: "@AnjaliD",
          testimonial: "Best momos and noodles at a pocket-friendly budget.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-executives-having-meal_1170-1740.jpg",
          imageAlt: "Anjali D.",
        },
        {
          id: "5",
          name: "Rajesh M.",
          handle: "@RajeshM",
          testimonial: "Amazing food enjoyed with family.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/family-having-nice-thanksgiving-dinner-together_23-2149082321.jpg",
          imageAlt: "Rajesh M.",
        },
      ]}
      showRating={true}
      title="What Food Lovers Say"
      description="Hear directly from our happy customers about their favorite dishes and unforgettable dining experiences at Tibet Momo IG2."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Tibet Momo IG2",
          name: "Steamed Momos",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chinese-hot-pot_23-2149529850.jpg",
          imageAlt: "Delicious Steamed Momos",
        },
        {
          id: "2",
          brand: "Tibet Momo IG2",
          name: "Schezwan Momos",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-meal-with-sambal-arrangement_23-2149076074.jpg",
          imageAlt: "Spicy Schezwan Fried Momos",
        },
        {
          id: "3",
          brand: "Tibet Momo IG2",
          name: "Pan Fried Momos",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-chef-cooking-meat_23-2149631735.jpg",
          imageAlt: "Savory Pan Fried Momos",
        },
        {
          id: "4",
          brand: "Tibet Momo IG2",
          name: "Rooftop Dining",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/writers-scene-concept_23-2151931182.jpg",
          imageAlt: "Rooftop Dining Area",
        },
        {
          id: "5",
          brand: "Tibet Momo IG2",
          name: "Happy Customers",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-happy-friends-enjoying-lunch-focus-is-african-american-woman-serving-salad-dining-table_637285-2870.jpg",
          imageAlt: "Happy Customers Enjoying Food",
        },
        {
          id: "6",
          brand: "Tibet Momo IG2",
          name: "Signature Sauces",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-spiral-pasta-with-different-seasonings-grey-desk-pasta-dough-color-pepper-food_140725-95369.jpg",
          imageAlt: "Assortment of Signature Sauces",
        },
        {
          id: "7",
          brand: "Tibet Momo IG2",
          name: "Maggi Bowls",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-raw-dough-pasta-formed-inside-plate-brown-table-dough-raw-food-pasta-meal_140725-79420.jpg",
          imageAlt: "Unique Maggi Momo Bowls",
        },
        {
          id: "8",
          brand: "Tibet Momo IG2",
          name: "Restaurant Ambiance",
          price: "",
          rating: 0,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-wedding-candles_1157-17841.jpg",
          imageAlt: "Inviting Restaurant Ambiance",
        },
      ]}
      title="Our Culinary Art & Ambiance"
      description="A visual journey through our handcrafted momos, signature sauces, and the vibrant atmosphere of Tibet Momo IG2. Get a glimpse of what makes us Pondicherry's favorite."
    />
  </div>

  <div id="story-events" data-section="story-events">
      <MediaAbout
      useInvertedBackground={false}
      title="The Tibet Momo Experience"
      description="Every plate begins with fresh ingredients.\n\nEvery momo is handcrafted.\n\nEvery sauce is prepared to deliver the perfect balance of spice, flavor, and satisfaction.\n\nFrom your first bite to your last, we want every visit to feel memorable.\n\n\nCelebrating Something Special? Birthdays, family gatherings, student meetups, and casual celebrations are always welcome. Our team loves creating memorable dining experiences for our guests."
      imageSrc="http://img.b2bpic.net/free-photo/side-view-traditional-georgian-khinkali-served-with-spicy-sauces-sauces-tray_140725-12201.jpg"
      imageAlt="Chef preparing momos in a clean kitchen, family celebrating at restaurant"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you offer vegetarian options?",
          content: "Absolutely. We offer several vegetarian momo varieties and snacks, ensuring there's something delicious for everyone.",
        },
        {
          id: "2",
          title: "Do you have rooftop seating?",
          content: "Yes, our guests can enjoy our beautiful rooftop dining area, offering a relaxed and memorable ambiance.",
        },
        {
          id: "3",
          title: "Is takeaway available?",
          content: "Yes. Dine-in, takeaway, and delivery options are all available for your convenience. Enjoy Tibet Momo IG2 wherever you like!",
        },
        {
          id: "4",
          title: "Which dish should I try first?",
          content: "Our Pan Sauce Fried Momos and Maggi Momo Bowl are highly recommended and are absolute customer favorites. You can't go wrong with either!",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-drinking-coffee-tea-while-working-laptop_1098-13299.jpg"
      imageAlt="Friendly staff helping a customer"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our menu, dining options, and special services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready For Your Next Favorite Meal?"
      description="Discover why food lovers across Pondicherry keep coming back to Tibet Momo IG2. Order online, visit us, or give us a call!"
      inputs={[
        {
          name: "name",
          type: "hidden",
          placeholder: "Your Name",
          required: false,
        },
        {
          name: "message",
          type: "hidden",
          placeholder: "Your Message",
          required: false,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-man-with-sushi-order_23-2149870717.jpg"
      imageAlt="Plate of momos with order and direction icons"
      mediaAnimation="none"
      mediaPosition="left"
      buttonText="Discover Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Tibet Momo IG2"
      columns={[
        {
          title: "Our Specialties",
          items: [
            {
              label: "Fresh Momos",
              href: "#dishes",
            },
            {
              label: "Signature Sauces",
              href: "#why-us",
            },
            {
              label: "Rooftop Dining",
              href: "#why-us",
            },
          ],
        },
        {
          title: "Connect With Us",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/tibetmomoig2",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/tibetmomoig2",
            },
            {
              label: "Google Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Visit Us",
          items: [
            {
              label: "Open Daily",
              href: "#",
            },
            {
              label: "Get Directions",
              href: "#contact",
            },
            {
              label: "Call Us",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2026 Tibet Momo IG2. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

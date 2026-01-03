--
-- PostgreSQL database dump
--

\restrict F8fmnvvecv0OkKU98RXibd7onGC7AvRiujmgCKtfTlfKW2FZgUucmwFGtjGThDh

-- Dumped from database version 17.7 (bdc8956)
-- Dumped by pg_dump version 18.1

-- Started on 2026-01-03 01:38:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 24615)
-- Name: activities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.activities (
    id integer NOT NULL,
    destination_id integer,
    title character varying(100) NOT NULL,
    description text,
    image character varying(255),
    location_query text
);


--
-- TOC entry 223 (class 1259 OID 24614)
-- Name: activities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 223
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;


--
-- TOC entry 226 (class 1259 OID 24629)
-- Name: budget; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.budget (
    id integer NOT NULL,
    user_id integer,
    trip_id integer,
    category character varying(100) NOT NULL,
    amount numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 225 (class 1259 OID 24628)
-- Name: budget_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.budget_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 225
-- Name: budget_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.budget_id_seq OWNED BY public.budget.id;


--
-- TOC entry 230 (class 1259 OID 32783)
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    name character varying(100),
    email character varying(100),
    message text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 229 (class 1259 OID 32782)
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 229
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- TOC entry 220 (class 1259 OID 24587)
-- Name: destinations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.destinations (
    id integer NOT NULL,
    name character varying(100),
    country character varying(100),
    description text,
    image text,
    price numeric,
    city_image character varying(255)
);


--
-- TOC entry 219 (class 1259 OID 24586)
-- Name: destinations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.destinations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 219
-- Name: destinations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.destinations_id_seq OWNED BY public.destinations.id;


--
-- TOC entry 228 (class 1259 OID 32769)
-- Name: estimated_costs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estimated_costs (
    id integer NOT NULL,
    destination_id integer,
    name character varying(100),
    cost numeric
);


--
-- TOC entry 227 (class 1259 OID 32768)
-- Name: estimated_costs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.estimated_costs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 227
-- Name: estimated_costs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.estimated_costs_id_seq OWNED BY public.estimated_costs.id;


--
-- TOC entry 222 (class 1259 OID 24596)
-- Name: trips; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trips (
    id integer NOT NULL,
    user_id integer,
    destination_id integer,
    start_date date,
    end_date date,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 221 (class 1259 OID 24595)
-- Name: trips_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trips_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 221
-- Name: trips_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trips_id_seq OWNED BY public.trips.id;


--
-- TOC entry 218 (class 1259 OID 24577)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 217 (class 1259 OID 24576)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3245 (class 2604 OID 24618)
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);


--
-- TOC entry 3246 (class 2604 OID 24632)
-- Name: budget id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.budget ALTER COLUMN id SET DEFAULT nextval('public.budget_id_seq'::regclass);


--
-- TOC entry 3249 (class 2604 OID 32786)
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- TOC entry 3242 (class 2604 OID 24590)
-- Name: destinations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.destinations ALTER COLUMN id SET DEFAULT nextval('public.destinations_id_seq'::regclass);


--
-- TOC entry 3248 (class 2604 OID 32772)
-- Name: estimated_costs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estimated_costs ALTER COLUMN id SET DEFAULT nextval('public.estimated_costs_id_seq'::regclass);


--
-- TOC entry 3243 (class 2604 OID 24599)
-- Name: trips id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trips ALTER COLUMN id SET DEFAULT nextval('public.trips_id_seq'::regclass);


--
-- TOC entry 3240 (class 2604 OID 24580)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3425 (class 0 OID 24615)
-- Dependencies: 224
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.activities (id, destination_id, title, description, image, location_query) FROM stdin;
1	1	Visit the Eiffel Tower	Enjoy the iconic landmark of Paris	eiffel.webp	Eiffel Tower Paris France
2	1	Explore the Louvre Museum	Discover world-famous art collections	meusum.jpg	Louvre Meuseum Paris France
3	1	Cruise the Seine River	Relax on a scenic river cruise	river.avif	Seine River Cruise Paris France
13	2	Visit Shibuya Crossing	\N	shibuya.jpg	Shibuya Crossing Tokyo Japan
14	2	Explore Tokyo Temples	Visit historic temples and shrines	temple.jpg	Senso-ji Temple Tokyo Japan
15	2	Taste the Japanese sushi	Taste the Japanese sushi	suchi.jpg	Tsukiji Sushi Tokyo Japan
16	3	Visit zeitunaBey	See the	zaytuna.jpg	Zaitunay Bay Beirut Lebanon
17	3	Explore National Museum	visit the national meausum in Beirut	meusumB.webp	National Museum of Beirut Lebanon
18	3	Beirut Nightlife	Experience Beirut’s vibrant nightlife	hamra.jpg	Hamra Street Beirut Lebanon
4	4	Visit Burj Khalifa	Explore the tallest building in the world	khalifa.jpg	Burj Khalifa Dubai United Arab Emirates
5	4	Desert Safari	Experience dune bashing and desert culture	safari.jpg	Dubai Desert Safari United Arab Emirates
6	4	Dubai Mall Tour	Shop in one of the world's largest malls	dubaimall.avif	Dubai Mall Dubai United Arab Emirates
7	5	Visit Hagia Sophia	Explore historic Byzantine architecture	sophia.jpg	Hagia Sophia Istanbul Turkey
8	5	Bosphorus Cruise	Cruise between Europe and Asia	tour.avif	Bosphorus Cruise Istanbul Turkey
9	5	Grand Bazaar	Shop in one of the oldest markets in the world	bazaar.jpg	Grand Bazaar Istanbul Turkey
10	6	Statue of Liberty	Visit an iconic American landmark	statue.jpg	Statue of Liberty New York USA
11	6	Central Park Walk	Relax in the heart of NYC	park.jpg	Central Park New York USA
12	6	Times Square	Experience the city lights	square.jpg	Times Square New York USA
\.


--
-- TOC entry 3427 (class 0 OID 24629)
-- Dependencies: 226
-- Data for Name: budget; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.budget (id, user_id, trip_id, category, amount, created_at) FROM stdin;
4	1	\N	france	12.00	2026-01-02 21:04:18.26516
5	1	\N	france	12.00	2026-01-02 21:04:20.344754
6	1	\N	Flight - Tokyo	900.00	2026-01-02 21:10:49.062887
7	1	\N	Hotel - Tokyo	650.00	2026-01-02 21:10:49.289007
8	1	\N	Food - Tokyo	300.00	2026-01-02 21:10:49.47243
9	1	\N	Transport - Tokyo	200.00	2026-01-02 21:10:49.66731
\.


--
-- TOC entry 3431 (class 0 OID 32783)
-- Dependencies: 230
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contacts (id, name, email, message, created_at) FROM stdin;
1	baqer	72230525@students.liu.edu.lb	hi\nthank u	2026-01-02 20:04:50.626274
\.


--
-- TOC entry 3421 (class 0 OID 24587)
-- Dependencies: 220
-- Data for Name: destinations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.destinations (id, name, country, description, image, price, city_image) FROM stdin;
6	New York	USA	The city that never sleeps	america.png	2200.00	newyork.webp
4	Dubai	United Arab Emirates	Luxury city with modern architecture	emirates.png	1800.00	dubai.jpg
1	Paris	France	City of lights and romance	france.png	1500.00	paris.avif
2	Tokyo	Japan	Modern city with rich culture	japan.png	2000.00	tokyo.avif
3	Beirut	Lebanon	Mediterranean capital with history	lebanon.png	800.00	beirut.webp
5	Istanbul	Turkey	Historic city connecting Europe and Asia	turkey.png	1200.00	istanbul.webp
\.


--
-- TOC entry 3429 (class 0 OID 32769)
-- Dependencies: 228
-- Data for Name: estimated_costs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.estimated_costs (id, destination_id, name, cost) FROM stdin;
1	1	Flight	700.00
2	1	Hotel	500.00
3	1	Food	200.00
4	1	Transport	100.00
17	2	Flight	900.00
18	2	Hotel	650.00
19	2	Food	300.00
20	2	Transport	200.00
21	3	Flight	400.00
22	3	Hotel	300.00
23	3	Food	150.00
24	3	Transport	100.00
5	4	Flight	900.00
6	4	Hotel	600.00
7	4	Food	250.00
8	4	Transport	150.00
9	5	Flight	500.00
10	5	Hotel	400.00
11	5	Food	180.00
12	5	Transport	120.00
13	6	Flight	1000.00
14	6	Hotel	800.00
15	6	Food	300.00
16	6	Transport	200.00
\.


--
-- TOC entry 3423 (class 0 OID 24596)
-- Dependencies: 222
-- Data for Name: trips; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trips (id, user_id, destination_id, start_date, end_date, created_at) FROM stdin;
2	1	1	3333-12-02	4444-12-03	2026-01-02 21:04:30.923538
\.


--
-- TOC entry 3419 (class 0 OID 24577)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, password, created_at) FROM stdin;
1	Test User	test@test.com	123456	2026-01-02 21:03:45.045082
\.


--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 223
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.activities_id_seq', 18, true);


--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 225
-- Name: budget_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.budget_id_seq', 9, true);


--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 229
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, true);


--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 219
-- Name: destinations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.destinations_id_seq', 6, true);


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 227
-- Name: estimated_costs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.estimated_costs_id_seq', 24, true);


--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 221
-- Name: trips_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trips_id_seq', 2, true);


--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 3260 (class 2606 OID 24622)
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);


--
-- TOC entry 3262 (class 2606 OID 24635)
-- Name: budget budget_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.budget
    ADD CONSTRAINT budget_pkey PRIMARY KEY (id);


--
-- TOC entry 3266 (class 2606 OID 32791)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- TOC entry 3256 (class 2606 OID 24594)
-- Name: destinations destinations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.destinations
    ADD CONSTRAINT destinations_pkey PRIMARY KEY (id);


--
-- TOC entry 3264 (class 2606 OID 32776)
-- Name: estimated_costs estimated_costs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estimated_costs
    ADD CONSTRAINT estimated_costs_pkey PRIMARY KEY (id);


--
-- TOC entry 3258 (class 2606 OID 24602)
-- Name: trips trips_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_pkey PRIMARY KEY (id);


--
-- TOC entry 3252 (class 2606 OID 24585)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 3254 (class 2606 OID 24583)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3269 (class 2606 OID 24623)
-- Name: activities activities_destination_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_destination_id_fkey FOREIGN KEY (destination_id) REFERENCES public.destinations(id) ON DELETE CASCADE;


--
-- TOC entry 3270 (class 2606 OID 24641)
-- Name: budget budget_trip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.budget
    ADD CONSTRAINT budget_trip_id_fkey FOREIGN KEY (trip_id) REFERENCES public.trips(id) ON DELETE SET NULL;


--
-- TOC entry 3271 (class 2606 OID 24636)
-- Name: budget budget_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.budget
    ADD CONSTRAINT budget_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 3272 (class 2606 OID 32777)
-- Name: estimated_costs estimated_costs_destination_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estimated_costs
    ADD CONSTRAINT estimated_costs_destination_id_fkey FOREIGN KEY (destination_id) REFERENCES public.destinations(id) ON DELETE CASCADE;


--
-- TOC entry 3267 (class 2606 OID 24608)
-- Name: trips trips_destination_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_destination_id_fkey FOREIGN KEY (destination_id) REFERENCES public.destinations(id);


--
-- TOC entry 3268 (class 2606 OID 24603)
-- Name: trips trips_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


-- Completed on 2026-01-03 01:39:16

--
-- PostgreSQL database dump complete
--

\unrestrict F8fmnvvecv0OkKU98RXibd7onGC7AvRiujmgCKtfTlfKW2FZgUucmwFGtjGThDh


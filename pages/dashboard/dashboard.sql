-- DASHBOARD/INTRO
-- 1. Uppdatera 'group.settings' med info: 
--  a. Medlemskostnad
--  b. Manuella / Automatiska sms

-- DASHBOARD/INDEX
-- 1. Om bara en förening: 
--  a. Hämta grupps statistik (antal medlemmar, <26år, antal ej förnyade), 
--  b. Hämta medlemars notiser. 
-- 2. Hämta nya notiser.
-- 3. Hämta nya guider.
-- 4. Hämta chatt-trådar.
-- 5. Hämta Välkommen + Annonser. 
-- 6. Exportera fullständig medlemslista.
-- 7. Exportera Årsrapport

-- DASHBOARD/GUIDE
-- 1. Hämta guides.
-- 2. Uppdatera 'seen'.

-- DASHBOARD/TAGS
-- 1. Hämta tags.
--  a. Inkludera antal medlemmar (som tillhör gruppen).

-- DASHBOARD/GROUP/_ID
-- 1. Om förening med ID: 
--  a. Hämta grupp inklusive medlemmar, 
--  b. Hämta medlemars notiser/taggar/events/roles/sms-mall. 
--  c. Hämta paginerat.

-- DASHBOARD/SMS
-- 1. Hämta mallar.
--  a. Inkludera taggar.
--  b. Inkludera roller.
-- 2. Skapa ny mall.
-- 3. Uppdatera mall.
-- 4. Radera mall.

-- SELECT pnr, FLOOR((CURDATE() - SUBSTR(pnr,1,8)) / 10000) AS age FROM members;

CREATE VIEW tags_view AS
SELECT members.id AS member_id, COUNT(tags.id) AS nr_tags, GROUP_CONCAT(tags.name) as name, 'tag' AS type
	FROM members JOIN members_tags 
	ON members.id = members_tags.member_id 
    JOIN tags ON members_tags.tag_id = tags.id 
    GROUP BY members.id
    
    UNION

    SELECT members.id AS member_id, COUNT(roles.id) AS nr_tags, GROUP_CONCAT(roles.name) as name, 'role' AS type
      FROM members JOIN members_roles 
      ON members.id = members_roles.member_id 
        JOIN roles ON members_roles.role_id = roles.id 
        GROUP BY members.id
            
        UNION

        SELECT members.id AS member_id, COUNT(events.id) AS nr_tags, GROUP_CONCAT(events.name) as name, 'event' AS type
          FROM members JOIN events_members 
          ON members.id = events_members.member_id 
            JOIN events ON events_members.event_id = events.id 
            GROUP BY members.id;

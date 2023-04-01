---
sidebar_position: 1
title: Intro & Planned structure
slug: /01-01-structure
tags: [tag1]
---

# Introduction

By the end of 2022, I decided I want to write a book about what I know best: creating an analytics solution step-by-step. The tool in focus is Power BI which is market leading by a large gap.

The current idea is to write it on this Wiki chapter by chapter, and I have a good feeling about the whole package I can publish it (i.e. transfer it to Word, format everything etc.). Currently though, I do not know how to publish a book (e.g. self-publishing?).

## Planned structure / Rough outline

The following is the structure that I have currently in mind for my book:

1. Einführung
    1. Ziel → Was ist das Endprodukt?
    2. Übersicht → Von A bis Z, Erstellung eines Projekts
    3. Prinzipien → Pragmatismus, Einfachheit etc.
2. Überblick
    1. Power BI
    2. Power Query
    3. BI & Analytics Lösungsdesign (Architektur)
        1. Übersicht (Elemente, Prozesse, Datenflüsse etc.) -> Darstellung Gesamtlösung mit Elementen und Flow
            1. Datenquellen
            2. Datenvorbereitung (ETL)
            3. Datenmodell
                1. Dimensionstabellen
                2. Faktentabellen
                3. KPIs
                4. Sonstiges (Hierarchien ..)
            4. Visualisierungen und Berichte
            5. Freigabe in der Orga
            6. Userrollen
                1. Administrators
                2. Developers
                3. Power User
                4. Enduser
        2. Integration mit Gesamtarchitektur des Unternehmens (Grundsätze, z.B. Vorbereitung der Tabellen in Datawarehouse)
            1. Brauche ich ein Data Warehouse?
            2. Übliches Setup (SQL + ERP + Excel + Sharepoint Files ...)
    4. Agiles Vorgehen (Grundsätze, Kanban, etc.)
3. Vorbereitung der Daten (ETL)
    1. Übersicht Power Query
    2. Faktentabelle
    3. Dimensionstabelle 1
    4. Dimensionstabelle 2
    5. Kalender
4. Erstellung des Datenmodells
    1. Beziehungen zwischen Dimensions- und Faktentabellen
    2. Einstellmöglichkeiten (Formatierung Feld, Ausblenden von Feldern, Sortierung …)
5. Erstellung der Berichte
    1. Berichtsdesign
    2. Filterung (und Filterkontext)
        1. Einstellmöglichkeiten Slicer, Synchronisation
    3. Einfache Visuals (Tabelle, Grafik, Grosse Zahl)
    4. Berechnungen (DAX), DRY-Prinzip
        1. (…)
        2. Formatierung, Speicherung in Ordner etc.
    5. (…)
6. Publikation des Datasets und Berichte auf Power BI Online
    1. Voraussetzungen
    2. Automatisierte Datenaktualisierung
    3. Berechtigungen
    4. Bedienung des Berichts Online
7. Themensammlung
    1. Row Level Security
    2. Währungsumrechnung
    3. Mehrere Excels der gleichen Struktur einlesen (Iteration)
    4. Design-Template
    5. Parameter in Power Query
    6. Data Flows
    7. Top N in Grafiken
    8. Datenqualität (Transparent machen)
    9. Wie Power BI Daten speichert
    10. Datenaktualisierung und Gateway
    11. Tabular Editor
8. Anhang
    1. DAX-Berechnungen
    2. Linksammlung

[...]
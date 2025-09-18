"use client";
import React, { useState } from "react";
import Dependencies from "@/components/content/dependencies";
import {
  code,
  democode,
  title,
  description,
  routepoint,
  commandMap,
  utilcode,
  packagesMap,
  threeDCarousel,
} from "../show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { getNavigationFeaturedItems } from "@/lib/getNavigationFeaturedItems";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/commmand-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import PropsTable from "@/components/content/props-table";
import ThreeDCarousel from "@/components/3d-carousel-v2";

const ThreeDCarouselPreview = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(true);
  const { previous, next } = getNavigationFeaturedItems(title);

  // Sample data for the carousel
  const sampleItems = [
    {
      id: 1,
      title: "Smart Textile Solutions",
      brand: "TechFabric",
      description: "Revolutionary smart textiles for healthcare monitoring with advanced sensor technology.",
      tags: ["Healthcare", "IoT", "Sensors"],
      imageUrl: "/api/placeholder/400/300",
      link: "/learn-more"
    },
    {
      id: 2,
      title: "Athletic Performance Tracking",
      brand: "SportTech",
      description: "Performance tracking through intelligent fabric sensors for professional athletes.",
      tags: ["Sports", "Performance", "Analytics"],
      imageUrl: "/api/placeholder/400/300",
      link: "/sports-tech"
    },
    {
      id: 3,
      title: "Industrial Safety Monitoring",
      brand: "SafetyFirst",
      description: "Workplace safety monitoring with smart textiles for enhanced worker protection.",
      tags: ["Safety", "Industrial", "Monitoring"],
      imageUrl: "/api/placeholder/400/300",
      link: "/safety-solutions"
    },
    {
      id: 4,
      title: "Fashion Tech Innovation",
      brand: "FashionTech",
      description: "Cutting-edge fashion technology integrating style with smart functionality.",
      tags: ["Fashion", "Innovation", "Wearables"],
      imageUrl: "/api/placeholder/400/300",
      link: "/fashion-tech"
    }
  ];

  return (
    <MainContentContainer>
      <MainTitle title={title} description={description} />
      <ToggleButtonGroup
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        routepoint={routepoint}
      />
      {!sourceCode ? (
        <PreviewComponentContainer>
          <ThreeDCarousel items={sampleItems} />
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}
      <ToggleManualCli
        sourceManual={sourceManual}
        setSourceManual={setSourceManual}
      />
      {!sourceManual ? (
        <CommandBlock
          npmCommand={commandMap.npm}
          pnpmCommand={commandMap.pnpm}
          yarnCommand={commandMap.yarn}
          bunCommand={commandMap.bun}
        />
      ) : (
        <>
          <Dependencies step={1} title="Install the packages">
            <CommandBlock
              npmCommand={packagesMap.npm}
              pnpmCommand={packagesMap.pnpm}
              yarnCommand={packagesMap.yarn}
              bunCommand={packagesMap.bun}
            />
          </Dependencies>
          <Dependencies step={2} title="Add util file">
            <CodeBlock fileName="lib/util.ts" code={utilcode} />
          </Dependencies>
          <Dependencies
            step={3}
            title="Copy and paste the following code into your project"
          >
            <ComponentSource>
              <CodeBlock fileName={`${routepoint}.tsx`} code={code} />
            </ComponentSource>
          </Dependencies>
          <Dependencies
            step={4}
            title="Update the import paths to match your project setup"
          ></Dependencies>
        </>
      )}
      <PropsTable propsData={threeDCarousel} />
      <ComponentNavigation previous={previous} next={next} />
    </MainContentContainer>
  );
};

export default ThreeDCarouselPreview;
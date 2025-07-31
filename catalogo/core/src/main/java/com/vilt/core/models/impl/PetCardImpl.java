package com.vilt.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ExporterConstants;
import com.vilt.core.models.PetCard;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = { PetCard.class }, resourceType = {
        PetCardImpl.RESOURCE_TYPE }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

@org.apache.sling.models.annotations.Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)

public class PetCardImpl implements PetCard {

    public static final String RESOURCE_TYPE = "catalogo/components/petcard";

    @ValueMapValue
    private String id;

    @ValueMapValue
    private String name;

    @ValueMapValue
    private String breed;

    @ValueMapValue
    private String age;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String image;

    // Getters

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getBreed() {
        return breed;
    }

    @Override
    public String getAge() {
        return age;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getImage() {
        return image;
    }

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
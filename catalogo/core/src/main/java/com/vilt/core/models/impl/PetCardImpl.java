package com.vilt.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ExporterConstants;
import com.vilt.core.models.PetCard;

@Model(adaptables = { Resource.class, SlingHttpServletRequest.class }, adapters = { PetCard.class },

        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL, resourceType = { PetCardImpl.RESOURCE_TYPE })

@org.apache.sling.models.annotations.Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)

public class PetCardImpl implements PetCard {

    public static final String RESOURCE_TYPE = "catalogo/components/petcard";

    @ValueMapValue
    private String country;

    @ValueMapValue
    private String refCode;

    @ValueMapValue
    private String lotNumber;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String process;

    @ValueMapValue
    private String varietal;

    @ValueMapValue
    private String score;

    @ValueMapValue
    private String units;

    @ValueMapValue
    private String notes;

    @ValueMapValue
    private String about;
    @ValueMapValue
    private String heroImage;

    // Getters for the properties

    @Override
    public String getCountry() {
        return country;
    }

    @Override
    public String getRefCode() {
        return refCode;
    }

    @Override
    public String getLotNumber() {
        return lotNumber;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getProcess() {
        return process;
    }

    @Override
    public String getVarietal() {
        return varietal;
    }

    @Override
    public String getScore() {
        return score;
    }

    @Override
    public String getUnits() {
        return units;
    }

    @Override
    public String getNotes() {
        return notes;
    }

    @Override
    public String getAbout() {
        return about;
    }

    @Override
    public String getHeroImage() {
        return heroImage;
    }

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutBanner extends Struct.ComponentSchema {
  collectionName: 'components_about_about_banners';
  info: {
    description: 'Banner configuration for About pages';
    displayName: 'About Banner';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerBannerSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_banner_banner_subtitles';
  info: {
    description: 'Configurable subtitle for banner slides';
    displayName: 'Banner Subtitle';
  };
  attributes: {
    animation: Schema.Attribute.Enumeration<
      ['none', 'fade', 'slide', 'scale']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'fade'>;
    animationDelay: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.2>;
    color: Schema.Attribute.Enumeration<
      ['neutral', 'white', 'green', 'black']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'neutral'>;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'medium'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    weight: Schema.Attribute.Enumeration<
      ['normal', 'medium', 'semibold', 'bold']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bold'>;
  };
}

export interface ContactContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_details';
  info: {
    description: '';
    displayName: 'Contact Detail';
  };
  attributes: {
    buttonMapLink: Schema.Attribute.String;
    hasMap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeographySlide extends Struct.ComponentSchema {
  collectionName: 'components_geography_slides';
  info: {
    description: 'A slide in the geography section containing a map and content';
    displayName: 'Geography Slide';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    map: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ProductDocument extends Struct.ComponentSchema {
  collectionName: 'components_product_documents';
  info: {
    description: 'Product related documents';
    displayName: 'Document';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['manual', 'datasheet', 'certificate', 'other']
    > &
      Schema.Attribute.Required;
  };
}

export interface ProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_features';
  info: {
    description: 'Product features and benefits';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    description: 'Product specification as a label-value pair';
    displayName: 'Specification';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Search Engine Optimization metadata';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'width=device-width, initial-scale=1'>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-banner': AboutAboutBanner;
      'banner.banner-subtitle': BannerBannerSubtitle;
      'contact.contact-detail': ContactContactDetail;
      'geography.slide': GeographySlide;
      'product.document': ProductDocument;
      'product.feature': ProductFeature;
      'product.specification': ProductSpecification;
      'shared.seo': SharedSeo;
    }
  }
}

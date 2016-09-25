//SEE: https://gist.github.com/eristoddle/4f1c5479174cb02dd3d7e81df0ea5d1e
import { Directive, Component, Input, ViewContainerRef, ComponentResolver, ComponentMetadata, ReflectiveInjector, ComponentFactory } from '@angular/core';
import { Calendar } from '../calendar/calendar';

@Directive( {
    selector: 'dynamic-html-wrap'
} )
export class DynamicHTMLDirective {
    @Input() src: string;

    constructor( private vcRef: ViewContainerRef, private resolver: ComponentResolver ) {}

    createComponentFactory( resolver: ComponentResolver, metadata: ComponentMetadata ) {
        const cmpClass = class DynamicComponent {};
        const decoratedCmp = Component( metadata )( cmpClass );

        return resolver.resolveComponent( decoratedCmp );
    }

    ngOnChanges() {
        if (!this.src) return;

        const metadata = new ComponentMetadata( {
            selector: 'dynamic-html',
            directives: [ Calendar ],
            template: this.src,
        } );

        this.createComponentFactory( this.resolver, metadata )
        .then( factory => {
            const injector = ReflectiveInjector.fromResolvedProviders( [], this.vcRef.parentInjector );
            this.vcRef.createComponent( factory, 0, injector, [] );
        } );
    }
}
